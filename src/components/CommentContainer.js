const commentData = [
  {
    name: "Pramod1",
    text: "this video is awesom looks faboulus1",
    replies: [
      {
        name: "Pramod1.1",
        text: "this video is awesom looks faboulus1.1",
        replies: [],
      },
    ],
  },
  {
    name: "Pramod2",
    text: "this video is awesom looks faboulus2",
    replies: [
      {
        name: "Pramod",
        text: "this video is awesom looks faboulus2.1",
        replies: [
          {
            name: "Pramod",
            text: "this video is awesom looks faboulus2.2",
            replies: [
              {
                name: "Pramod",
                text: "this video is awesom looks faboulus2.2",
                replies: [
                  {
                    name: "Pramod",
                    text: "this video is awesom looks faboulus2.2",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Pramod",
        text: "this video is awesom looks faboulus2.2",
        replies: [],
      },
    ],
  },
  {
    name: "Pramod",
    text: "this video is awesom looks faboulus",
    replies: [
      {
        name: "Pramod",
        text: "this video is awesom looks faboulus",
        replies: [],
      },
    ],
  },
  {
    name: "Pramod",
    text: "this video is awesom looks faboulus",
    replies: [],
  },
  {
    name: "Pramod",
    text: "this video is awesom looks faboulus",
    replies: [
      {
        name: "Pramod",
        text: "this video is awesom looks faboulus",
        replies: [],
      },
      {
        name: "Pramod",
        text: "this video is awesom looks faboulus",
        replies: [],
      },
      {
        name: "Pramod",
        text: "this video is awesom looks faboulus",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex bg-gray-100 mt-2 p-4">
      <img
        className="w-12 h-12 "
        alt="user_image"
        src="https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg"
      />

      <div className="px-3 ml-4 ">
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          <div className="pl-6 border border-l-black ml-6">
            <CommentList comments={comment?.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};
const CommentContainer = () => {
  return (
    <div className="m-4 p-3">
      <h1 className="text-2xl font-semibold">Comments</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
