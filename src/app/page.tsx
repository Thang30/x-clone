import Image from "@/components/Image";

const Homepage = () => {
  return (
    <div>
      <div className="relative w-[600px] h-[600px]">
        <Image path="general/post.jpeg" alt="test post" w={600} h={600} />
      </div>
    </div>
  );
};

export default Homepage;
