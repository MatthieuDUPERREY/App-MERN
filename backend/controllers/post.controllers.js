const PostModel = require("../models/post.model");

module.exports.getPosts = async (req, res) => {
  const posts = await PostModel.find();
  res.status(200).json(posts);
};

module.exports.setPosts = async (req, res) => {
  if (!req.body.message) {
    res.status(400).json({ message: "Merci d'ajouter un message!" });
  }
  const post = await PostModel.create({
    message: req.body.message,
    author: req.body.author,
  });
  res.status(200).json(post);
};

// module.exports.editPost = async (req, res) => {
//   const post = await PostModel.findById(req.params.id);
//   if (!post) {
//     res.status(400).json({ message: "Ce post n'existe pas" });
//   }
//   const updatePost = await PostModel.findByIdAndUpdate(post, req.body, {
//     new: true,
//   });
//   res.status(200).json(updatePost);
// };
module.exports.editPost = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);

    if (!post) {
      return res.status(400).json({ message: "Ce post n'existe pas" });
    }

    const updatePost = await PostModel.findByIdAndUpdate(
      req.params.id, // Utilisez l'ID directement ici
      req.body,
      { new: true }
    );

    res.status(200).json(updatePost);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la modification du post", error });
  }
};

module.exports.deletePost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);
  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }
  await post.deleteOne();
  res.status(200).json(post);
};

module.exports.likePost = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.dislikePost = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};
