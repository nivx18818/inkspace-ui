import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import blockTypes from "./block-types";

import clsx from "clsx";
import generateId from "@/utils/generate-id";

function ContentBlocks({ postContent }) {
  const defaultBlocks = [{ id: generateId(), type: "text", content: "" }];

  const [blocks, setBlocks] = useState(() => {
    try {
      const parsedBlocks = JSON.parse(postContent ?? "[]");
      const blocksWithIds =
        Array.isArray(parsedBlocks) && parsedBlocks.length
          ? parsedBlocks.map((block) => ({ id: generateId(), ...block }))
          : defaultBlocks;
      return blocksWithIds;
    } catch {
      return defaultBlocks;
    }
  });

  const blockRefs = useRef({});
  const [menuOpen, setMenuOpen] = useState(null);

  useEffect(() => {
    if (blocks.length === 0) {
      setBlocks(defaultBlocks);
      setTimeout(() => {
        const id = Object.keys[blockRefs[0]];
        blockRefs.current[id]?.focus();
      }, 0);
    }
  }, [blocks.length]);

  const handleUpdateTextBlock = (index) => (e) => {
    setBlocks([
      ...blocks.slice(0, index),
      { ...blocks[index], content: e.target.value },
      ...blocks.slice(index + 1),
    ]);
  };

  const focusById = (id) => {
    setTimeout(() => {
      blockRefs.current[id]?.focus();
    }, 0);
  };

  const handleAddBlock = (index, newBlock) => {
    const blockWithId = { id: generateId(), ...newBlock };

    setBlocks([
      ...blocks.slice(0, index + 1),
      blockWithId,
      ...blocks.slice(index + 1),
    ]);

    focusById(blockWithId.id);
    setMenuOpen(null);
  };

  const handleReplaceBlock = (index, newBlock) => {
    const keepId = blocks[index]?.id ?? generateId();
    const blockWithId = { id: keepId, ...newBlock };

    setBlocks([
      ...blocks.slice(0, index),
      blockWithId,
      ...blocks.slice(index + 1),
    ]);

    focusById(keepId);
  };

  const handleDeleteBlock = (index) => (e) => {
    const newBlocks = [...blocks.slice(0, index), ...blocks.slice(index + 1)];
    setBlocks(newBlocks);

    setTimeout(() => {
      const focusIndex = Math.min(index, newBlocks.length - 1);
      const idToFocus = newBlocks[focusIndex]?.id;
      if (idToFocus) blockRefs.current[idToFocus]?.focus();
    }, 0);

    setMenuOpen(null);
  };

  const handleImageUpload = (index) => (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const newBlock = { type: "image", src: e.target.result };
      handleAddBlock(index, newBlock);
    };

    reader.readAsDataURL(file);
  };

  const handleYoutubeEmbed = (index) => () => {};

  const handlePaste = (index) => async (e) => {
    const items = e.clipboardData.items;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.type.startsWith("image/")) {
        e.preventDefault();

        const file = item.getAsFile();
        const reader = new FileReader();

        reader.onload = (e) => {
          const currentBlock = blocks[index];
          const newBlock = { type: "image", src: e.target.result };

          if (currentBlock.type === "text" && currentBlock.content === "") {
            handleReplaceBlock(index, newBlock);
          } else {
            handleAddBlock(index, newBlock);
          }
        };

        reader.readAsDataURL(file);
        break;
      }
    }
  };

  const handleBlockKeyDown = (index) => (e) => {
    if (e.isComposing) return;

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const newBlock = { type: "text", content: "" };
      handleAddBlock(index, newBlock);
      return;
    }

    if (blocks.length === 1 && blocks[0].type === "text") {
      return;
    }

    const block = blocks[index];

    if (
      e.key === "Backspace" &&
      block.type === "text" &&
      block.content !== ""
    ) {
      return;
    }

    if (e.key === "Backspace") {
      e.preventDefault();
      handleDeleteBlock(index);
    }
  };

  return (
    <div className="space-y-8">
      {blocks.map((block, i) => {
        const BlockComponent = blockTypes[block.type];

        return (
          <div key={block.id} className="group relative w-full">
            <BlockComponent
              ref={(el) => {
                if (el) blockRefs.current[block.id] = el;
                else delete blockRefs.current[block.id];
              }}
              block={block}
              hasPlaceholder={i === 0 && menuOpen !== i}
              handleUpdateTextBlock={handleUpdateTextBlock(i)}
              handleBlockKeyDown={handleBlockKeyDown(i)}
              handlePaste={handlePaste(i)}
            />

            {block.type === "text" && block.content === "" && (
              <>
                {/* Floating menu trigger button */}
                <button
                  type="button"
                  className={clsx(
                    "absolute top-0 right-[103%] z-20 content-blocks-menu-button opacity-0 transition-transform duration-500 group-focus-within:opacity-100",
                    menuOpen === i && "rotate-135",
                  )}
                  onClick={() => setMenuOpen(menuOpen === i ? null : i)}
                  tabIndex={-1}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>

                {/* Floating menu */}
                {menuOpen === i && (
                  <div className="absolute top-0 left-0 z-10 flex animate-[fade-slide-in_.2s_ease-in-out_forwards] items-center gap-2 text-primary hover:text-primary-hover">
                    <label
                      className="content-blocks-menu-button cursor-pointer"
                      htmlFor={`image-upload-${i}`}
                    >
                      <FontAwesomeIcon icon={faImage} />
                      <input
                        id={`image-upload-${i}`}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload(i)}
                      />
                    </label>
                    <button
                      type="button"
                      className="content-blocks-menu-button"
                      onClick={handleYoutubeEmbed(i)}
                    >
                      <FontAwesomeIcon icon={faYoutube} />
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Delete button */}
            {(blocks.length > 1 || blocks[0].type !== "text") && (
              <button
                type="button"
                className="absolute top-0 left-[calc(100%+10px)] text-destructive opacity-0 transition group-hover:opacity-100"
                onClick={handleDeleteBlock(i)}
                tabIndex={-1}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ContentBlocks;
