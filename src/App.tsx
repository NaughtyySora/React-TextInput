import { FC, FormEvent } from "react";
import { useTextInput } from "./hooks/useTextInput";
import { TextInput } from "./components/TextInput/TextInput";

export const App: FC = () => {
  const form = {
    simple: useTextInput(),
    cash: useTextInput({ filters: ["cash"] }),
    slug: useTextInput({ filters: ["slug"] }),
    email: useTextInput({
      validators: {
        email: { msg: "Custom email validation message" },
        length: { options: 25 }
      }
    }),
  };
  const password = useTextInput();
  const confirm = useTextInput({ equalTo: password.value });


  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log(Object.fromEntries(formData));
  };

  return (
    <main className="App">
      <form className="App-form" id="form" onSubmit={onSubmit}>
        <TextInput
          id="input-simple"
          {...form.simple.inputProps}
          errors={form.simple.errors}
          label="Simple"
          placeholder="Some text"
          name="simple"
        />

        <TextInput
          id="input-cash"
          {...form.cash.inputProps}
          errors={form.cash.errors}
          label="Cash filter (numbers & dot) "
          placeholder="123.122"
          name="cash"
        />

        <TextInput
          id="input-slug"
          {...form.slug.inputProps} errors={form.slug.errors}
          label="Slug filter (spaces) "
          placeholder="admin-post"
          name="slug"
        />

        <TextInput
          id="input-email"
          {...form.email.inputProps}
          errors={form.email.errors}
          label="Email validation "
          placeholder="johnDoe@gmail.com"
          maxLength={25}
          name="email"
        />

        <TextInput
          id="input-pass"
          {...password.inputProps}
          errors={password.errors}
          label="Password"
          placeholder="good looking pass"
          type="password"
          name="password"
        />

        <TextInput
          id="input-confirm"
          {...confirm.inputProps}
          errors={confirm.errors}
          label="Confirm Password  + Equal to Password"
          placeholder="Confirm password"
          name="confirm"
        />
      </form>
      <button className="App-form-btn" form="form">Submit</button>
    </main>
  );
};