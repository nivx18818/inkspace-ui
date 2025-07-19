"use client";

import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

function DeletePostModal({ handleDeletePost }) {
  const { slug } = useParams();
  const router = useRouter();

  const handleCancel = () => handleDeletePost(false);

  const handleConfirm = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts/${slug}`,
        {
          method: "DELETE",
        },
      );
      if (response.ok) router.push("/");
      const res = await response.json();
      throw new Error(
        res.message ?? "An error occurred while deleting the post",
      );
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      handleCancel();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 text-gray-800">
      <div className="rounded bg-background p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Delete Post</h2>
        <p className="mb-4">Are you sure you want to delete this post?</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleCancel}
            className="rounded bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="rounded bg-destructive px-4 py-2 text-white hover:bg-red-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletePostModal;
