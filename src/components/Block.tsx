export interface BlockData {
  imagePos: string;
  imageUrl: string;
  title: string;
  bodyText: string;
  linkUrl: string;
  linkText: string;
}
const imageContainer = (block: BlockData) => {
  return (
    <>
    <div className=" w-40">
      <img src={block.imageUrl} alt="" className="rounded-sm h-full" />
    </div>
    </>
  );
};
const textContainer = (block: BlockData) => {
  return (
    <>
      <div className="description">
        <div className="heading">{block.title}</div>
        <div className="body">{block.bodyText}</div>
      </div>
      <a className="button border rounded-sm border-black text-center py-3 text-sm" href="#vagaro">
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
      <section className="flex mb-12">{block && contentContainer(block)}</section>
    </>
  );
};

export default Block;
