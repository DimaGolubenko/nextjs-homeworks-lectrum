// Core
import moment from "moment";
import { resolve } from "path";

// Helpers
import { isGuest, isFriend, isFamilyMember } from "./getUserData";

const getPostsWithReceivingDate = (posts) =>
  posts.map((post) => {
    post.dateOfReceiving = moment().format("MMM Do YY");
    return post;
  });

export const fetchPostsByCategory = async (fs, category) => {
  const posts = JSON.parse(await fs.readFile(resolve(__dirname, `../tmp/data/${category}.json`)));
  return getPostsWithReceivingDate(posts);
};

export const isFetchNews = (userType) => isGuest(userType) || isFriend(userType) || isFamilyMember(userType);
export const isFetchDiscounts = (userType) => isFriend(userType) || isFamilyMember(userType);
export const isFetchCars = (userType) => isFamilyMember(userType);

export const getPosts = async (fs, userRole) => {
  const news = isFetchNews(userRole) ? await fetchPostsByCategory(fs, "news") : [];
  const discounts = isFetchDiscounts(userRole) ? await fetchPostsByCategory(fs, "discounts") : [];
  const cars = isFetchCars(userRole) ? await fetchPostsByCategory(fs, "cars") : [];

  return {
    news,
    discounts,
    cars,
  };
};
