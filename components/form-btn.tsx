interface FormInputProps {
  loading: boolean;
  text: string;
}

export default function FormButton({ loading, text }: FormInputProps) {
  return (
    <button
      disabled={loading}
      className="primary-btn h-10 disabled:bg-neutral-300 disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {loading ? "Loading..." : text}
    </button>
  );
}
