import { Card, Button } from "flowbite-react";
import FileUploader from "../components/FileUploader";
import InputField from "../components/InputField";
import { useForm } from "react-hook-form";

const Home = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <>
      <Card>
        <InputField
          control={control}
          key="first-name"
          name="first-name"
          label="First Name"
          type="text"
        />
        <InputField
          control={control}
          key="last-name"
          name="last-name"
          label="Last Name"
          type="text"
        />
        <FileUploader control={control} name="file" label="Upload File" />
        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </Card>
      <div className="flex w-full gap-4">
        <Card className="flex-1/2">Large Content</Card>
        <Card className="flex-1/2">Large Content</Card>
      </div>
    </>
  );
};

export default Home;
