import { FC, FormEvent } from "react";
import { useTextInput } from "./hooks/useTextInput";
import { TextInput } from "./components/TextInput/TextInput";

export const App: FC = () => {
  const { inputProps, errors, isValid, value } = useTextInput(
    {
      filters: ["cash"],
      validators: { length: { msg: "12 symbols max", options: 12 }, }
    }
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    console.log("input value: ", value);

  };

  return (
    <main className="App">
      <form className="App-form" onSubmit={onSubmit}>
        <TextInput
          {...inputProps}
          errors={errors}
          id="text-input-preview"
          className="App-form-input"
          label="Enter:"
          autoComplete="off"
        />
        <button className="App-form-btn">Submit</button>
      </form>
    </main>
  );
};