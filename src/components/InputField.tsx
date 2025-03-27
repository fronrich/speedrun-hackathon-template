import { FC, HTMLInputTypeAttribute } from "react";
import { Label, TextInput } from "flowbite-react";
import {
  Control,
  FieldValues,
  RegisterOptions,
  useController,
} from "react-hook-form";

interface InputFieldProps {
  control: Control;
  name: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;

  type: HTMLInputTypeAttribute;
  placeholder?: string;
  label: string;
  defaultValue?: string | number;
}

const InputField: FC<InputFieldProps> = ({
  control,
  name,
  rules,
  placeholder,
  type,
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
      <div className="mb-2 block">
        <Label htmlFor={name}>{label}</Label>
      </div>
      <TextInput id={name} type={type} placeholder={placeholder} {...field} />
    </>
  );
};

export default InputField;
