export interface MiniBlockData {
  iconUrl?: string;
  title?: string;
  text?: string;
  linkUrl: string;
}
const contentContainer = (block: MiniBlockData) => {
  return (
    <>
      <div className="flex flex-1 justify-between items-center">
        {" "}
        {block.title && <span className="font-bold">{block.title}:</span>}
        {block.text && <span className="font-bold">{block.text}</span>}
      </div>
      <div className="span">→</div>
    </>
  );
};

const MiniBlock = (props: { blockData: MiniBlockData }) => {
  const block = props.blockData;
  return (
    <>
      <section className="flex mb-8 min-h-50 border shadow hover:shadow-inner rounded-sm border-black">
        <a href={block.linkUrl} className="flex flex-1 button opacity-80 font-bold px-5 rounded-sm text-center text-xl items-center justify-between">
          {block && contentContainer(block)}
        </a>
      </section>
    </>
  );
};

export default MiniBlock;
