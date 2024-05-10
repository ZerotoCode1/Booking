import { Box, TextField, Typography } from "@mui/material";

interface Props {
  name: string;
  label: string;
  onChange?: (value: string) => void;
  placeholder: string;
  defaultValue?: string | string;
}

const InputFiled = (props: Props) => {
  const { name, label, onChange, placeholder, defaultValue } = props;
  return (
    <>
      <Box>
        <Typography variant="subtitle1" gutterBottom>
          {label}
        </Typography>
        <TextField
          id="outlined-basic"
          name={name}
          onChange={(value) => {
            onChange && onChange(value.target.value);
          }}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      </Box>
    </>
  );
};

export default InputFiled;
