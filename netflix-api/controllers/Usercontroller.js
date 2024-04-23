const User = require("../models/UserModel");

module.exports.addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await await User.findOne({ email });
    if (user) {
      const { likedMovies } = user;
      const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);
      if (!movieAlreadyLiked) {
        await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: [...user.likedMovies, data],
          },
          { new: true }
        );
      } else return res.json({ msg: "Movie already added liked list." });
    } else await User.create({ email, likedMovies: [data] });
    return res.json({ msg: "Movie successfully added to liked list." });
  } catch (error) {
    return res.json({ msg: "Error adding movie to the liked list" });
  }
};

module.exports.getLikedMovies = async(req, res) =>{
  try {
    const {email} = req.params;
    const user = await User.findOne({email});
    if (user) {
      res.json({msg: "Success", movies: user.likedMovies})
    } else return res.json({msg: "User With Given Email Not Found"});
  } catch (err) {
    return res.json({ msg: "Error in fetching Movies" });

  }
}

// module.exports.removeFromLikedMovies = async(req, res) =>{
//   try {
//     const { email, movieId} = req.body;
//     const user = await await User.findOne({ email });
//     if (user) {
//       const { likedMovies } = user;
//       const movieIndex = likedMovies.findIndex(({ id }) => id === movieId);
//       if(!movieIndex) res.status(404).send({ msg: "Movie Not Found"}) 
//       likedMovies.splice(movieIndex, 1);

//         await User.findByIdAndUpdate(
//           user._id,
//           {
//             likedMovies,
//           },
//           { new: true }
//         );
//         return res.json({msg: "Movie Deleted",movies:likedMovies})
//     }
//   } catch (err) {
//     return res.json({ msg: "Error in deleting movie" });

//   }
// }

module.exports.removeFromLikedMovies = async (req, res) => {
  try {
    const { email, movieId } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { likedMovies } = user;
      const movieIndex = likedMovies.findIndex(({ id }) => id === movieId);
      // Change #1: Added a check for movieIndex === -1 to handle the case where movie is not found
      if (movieIndex === -1) {
        return res.status(404).json({ msg: "Movie Not Found" });
      } else {
        likedMovies.splice(movieIndex, 1);

        await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies,
          },
          { new: true }
        );

        return res.json({ msg: "Movie Deleted", movies: likedMovies });
      }
    } else {
      // Change #2: Added a 404 response if user is not found
      return res.status(404).json({ msg: "User with Given Email Not Found" });
    }
  } catch (err) {
    console.error("Error in deleting movie:", err);
    // Change #3: Changed the status code to 500 for internal server error
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};
