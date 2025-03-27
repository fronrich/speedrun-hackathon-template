import { FileInput, Label } from "flowbite-react";
import { FC } from "react";
import {
  Control,
  FieldValues,
  RegisterOptions,
  useController,
} from "react-hook-form";

interface FileUploaderProps {
  control: Control;
  name: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;

  label: string;
  defaultValue: string | number;
}

const FileUploader: FC<FileUploaderProps> = ({
  control,
  name,
  rules,
  label,
  defaultValue,
}) => {
  const { field } = useController({
    name,
    control,
    rules,
    defaultValue: defaultValue ?? "",
  });

  return (
    <>
      <Label className="mb-2 block" htmlFor={name}>
        {label}
      </Label>
      <FileInput id={name} {...field} />
    </>
  );
};

export default FileUploader;
