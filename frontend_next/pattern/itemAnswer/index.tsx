import dynamic from "next/dynamic";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

interface Props {
  defaultValue: string;
}

const PatternItemAnswer = (props: Props) => {
  return (
    <SunEditor
      lang="pt_br"
      defaultValue={props.defaultValue}
      disableToolbar={false}
      // readOnly={true}
      setOptions={{
        mode: "classic",
        buttonList: [["print"]],
        imageWidth: "50%",
        katex: "katex",
        height: "100%",
      }}
    />
  );
};

export default PatternItemAnswer;
