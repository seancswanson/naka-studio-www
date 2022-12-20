import Block, { BlockData } from "./Block";
import MiniBlock, { MiniBlockData } from "./MiniBlock";
import portrait from "../images/portrait.jpg";
import portrait2 from "../images/portrait-2.jpg";
import davines from "../images/davines.jpg";
import waitlistrLogo from "../images/waitlistr-logo.png";
import tiktok from '../images/tiktok-edited.gif';

export default function ContentBlocks() {
  const newClientBlockData: MiniBlockData = {
    text: "Are You A New Color Client? Start Here",
    linkUrl: "https://form.jotform.com/223496965831166",
  };

  const bookingBlockData: BlockData = {
    imagePos: "left",
    mediaUrl: portrait2.src,
    title: "Book With Alisha",
    bodyText: "Ready for a fresh new look? Book your appointment with me now and let's bring your hair vision to life. Click here to view my availability and schedule your service today.",
    linkUrl:
      "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLhDeHmL54q4iUQyZ7p7J3QcXu3kxU4jI16W0WHGVJeVQVjNBpvfgQXfdYXSs7AaF0ClWT3PX8zKuwTqey4gMGtiXD+huCMk1+dqlwIzNGCXFh397kd57bs3/9O0IcP/o8GnBBgJyWTd3YJMM27SGbujrk1s/xvnBqZdbL8gSIxBxVfhY/dgk6mo2Soyk3mxQ+p2mgPagfF1FO6r/hCTEa2JeCJxGnbu+/1iWZz7iBvMahaIopWvM/LZ0/IkKzfoMj5TH5m+/kkDUxNlNhXvuh7rO+QI517YYqy494+QU/s4T/CVq+Du8fyqGSKMxuM/MX/nIMEkf6OhFyXpxzBy+SsQnzoR0rH/awFi1Yrm0jbz&c_type=tab",
    linkText: "Schedule Now",
  };

  const affiliateBlockData: BlockData = {
    imagePos: "right",
    mediaUrl: davines.src,
    title: "Order Davines To Your Door",
    bodyText: "Upgrade your hair care routine with Davines, the premium Italian hair product line committed to sustainability.",
    linkUrl: "",
    linkText: "Order Today",
  };

  const aboutMeBlockData: BlockData = {
    imagePos: "left",
    mediaUrl: tiktok.src,
    title: "About Me",
    bodyText: "Get to know me better and learn about my passion for the beauty industry and my dedication to providing exceptional service to my clients. Click below to learn more about my journey as a hairstylist.",
    linkUrl: "/about-me",
    linkText: "Get To Know Me",
  };

  const waitlistrBlockData: BlockData = {
    imagePos: "left",
    mediaUrl: waitlistrLogo.src,
    title: "New Client Waitlist",
    bodyText: "Add yourself to my Waitlist so when I’m taking new clients, you won't miss out!",
    linkUrl: "",
    linkText: "Join the Waitlist",
  };

  return (
    <>
        <MiniBlock blockData={newClientBlockData} />
        <Block blockData={bookingBlockData} />
        <Block blockData={affiliateBlockData} />
        <Block blockData={aboutMeBlockData} />
    </>
  );
}
