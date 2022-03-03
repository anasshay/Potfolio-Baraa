const { Schema, model } = require("mongoose");

const AboutMeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Fperson-placeholder.html&psig=AOvVaw3Lhb0p01UdZatJBwWnXqie&ust=1644846030164000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDAwIzn_PUCFQAAAAAdAAAAABAD",
    },
  },
  { collection: "About_Me" }
);

const About_Me = model("About_Me", AboutMeSchema);
module.exports = About_Me;
