import Image from "@astrojs/image";

export interface BlockData {
  imagePos: string;
  mediaUrl: string;
  type?: string;
  title: string;
  bodyText: string;
  linkUrl: string;
  linkText: string;
}
const imageContainer = (block: BlockData) => {
  return (
    <>
      <div className="w-32 h-40 drop-shadow-md overflow-hidden">
        {block.type === "video" ? (
          <video className="rounded-sm w-full h-full object-cover object-center">
            {" "}
            <source src={block.mediaUrl} type="video/mp4" />
          </video>
        ) : (
          <img src={block.mediaUrl} alt={`Picture for ${block.title}`} className="rounded-sm w-full h-full object-cover object-center" />
        )}
      </div>
    </>
  );
};

const textContainer = (block: BlockData) => {
  return (
    <>
      <div className="block-body">
        <div className="heading font-bold">{block.title}</div>
        <div className="body text-xs opacity-90">{block.bodyText}</div>
      </div>
      <a href={block.linkUrl} className="text-l button font-extrabold border shadow hover:shadow-inner rounded-sm border-black text-center py-3 text-sm">
        {block.linkText}
      </a>
    </>
  );
};
const contentContainer = (block: BlockData) => {
  if (block.imagePos === "left") {
    return (
      <>
        <div className="left">{imageContainer(block)}</div>
        <div className="right flex flex-col justify-between pl-6">{textContainer(block)}</div>
      </>
    );
  }

  return (
    <>
      <div className="left flex flex-col justify-between">{textContainer(block)}</div>
      <div className="right pl-6">{imageContainer(block)} </div>
    </>
  );
};

const Block = (props: { blockData: BlockData }) => {
  const block = props.blockData;
  return (
    <>
      <section className="flex mb-12 min-h-160 p-5 shadow-md rounded border border-b">{block && contentContainer(block)}</section>
    </>
  );
};

export default Block;
