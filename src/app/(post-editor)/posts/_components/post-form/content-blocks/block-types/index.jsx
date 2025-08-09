import { forwardRef } from "react";

const TextBlock = forwardRef(function TextBlock(
  {
    block,
    hasPlaceholder,
    handleUpdateTextBlock,
    handleBlockKeyDown,
    handlePaste,
  },
  ref,
) {
  return (
    <textarea
      ref={ref}
      className="post-form-textarea text-lg leading-relaxed"
      value={block.content}
      placeholder={hasPlaceholder ? "Tell your story..." : ""}
      onChange={handleUpdateTextBlock}
      onKeyDown={handleBlockKeyDown}
      onPaste={handlePaste}
    />
  );
});

const ImageBlock = forwardRef(function ImageBlock(
  { block, handleBlockKeyDown, handlePaste },
  ref,
) {
  return (
    <div
      ref={ref}
      className="w-full outline-primary hover:outline-4 focus:outline-4"
      tabIndex={0}
      onKeyDown={handleBlockKeyDown}
      onPaste={handlePaste}
    >
      <img className="w-full" src={block.src} alt="" />
    </div>
  );
});

const YoutubeBlock = forwardRef(function YoutubeBlock(
  { block, handleBlockKeyDown, handlePaste },
  ref,
) {
  return (
    <div
      ref={ref}
      className="w-full outline-primary hover:outline-4 focus:outline-4"
      tabIndex={0}
      onKeyDown={handleBlockKeyDown}
      onPaste={handlePaste}
    >
      <iframe
        className="aspect-video w-full"
        src={block.src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
});

const blockTypes = {
  text: TextBlock,
  image: ImageBlock,
  youtube: YoutubeBlock,
};

export default blockTypes;
