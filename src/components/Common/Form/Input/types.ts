export type Props = Readonly<IInputProps>;

interface IInputProps {
  type: string;
  name: string;
  label: string;
  value: string | number;
  required?: boolean;
  placeholder?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: any) => void;
}
