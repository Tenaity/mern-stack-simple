import React from "react";
import "../css/PostItem.css";
const PostItem = () => {
  return (
    <div>
      <p className="post-content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ullam
        asperiores non temporibus praesentium libero voluptatum recusandae,
        commodi dolores impedit delectus quisquam quia modi magni sapiente
        doloribus et placeat perferendis!
      </p>
      <div className="post-footer">
        <div className="post-infor">
          <span>by TenCapy</span>
          <span>Date: 15/11/2020</span>
        </div>
        <div className="post-edit-delete">
          <span>Edit</span>
          <span>Delete</span>
          <span className="delete-question">Are you sure?</span>
          <span>Yes</span>
          <span>No</span>
        </div>
      </div>
      <div className="post-edit-form">
        <form action="" className="edit-form">
          <textarea name="content" id="content" type="text" className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            cumque veniam non natus expedita dignissimos, velit architecto optio
            recusandae itaque voluptatibus aliquid consequatur corrupti vel,
            assumenda animi rem ex qui?
          </textarea>
          <div className="btn-container">
            <button className="btn" type="button">
              Update
            </button>
            <button className="btn" type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostItem;
