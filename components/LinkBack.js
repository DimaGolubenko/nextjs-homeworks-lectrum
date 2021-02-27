import { useRouter } from "next/router";

export const LinkBack = () => {
  const router = useRouter();
  const goBack = () => router.back();

  return (
    <div>
      <span onClick={goBack} style={{ cursor: "pointer" }}>
        &#8592; Back
      </span>
    </div>
  );
};
