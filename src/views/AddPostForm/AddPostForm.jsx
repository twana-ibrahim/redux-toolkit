import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { postAdded } from "../../features/posts/postsSlice";
import { selectAllUsers } from "../../features/users/usersSlice";

const initialFormData = {
  title: "",
  content: "",
  userId: "",
};

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [postFormData, setPostFormData] = useState(initialFormData);

  const users = useSelector(selectAllUsers);

  const onPostFormChange = (e) =>
    setPostFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSavePostClicked = () => {
    if (postFormData.title && postFormData.content) {
      dispatch(
        postAdded(postFormData.title, postFormData.content, postFormData.userId)
      );

      setPostFormData(initialFormData);
    }
  };

  const canSave =
    Boolean(postFormData.title) &&
    Boolean(postFormData.content) &&
    Boolean(postFormData.userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="title"
          value={postFormData.title}
          onChange={onPostFormChange}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          name="userId"
          value={postFormData.userId}
          onChange={onPostFormChange}
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="content"
          value={postFormData.content}
          onChange={onPostFormChange}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};
export default AddPostForm;
