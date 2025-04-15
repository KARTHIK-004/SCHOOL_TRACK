import { Label } from "@/components/ui/label";

export default function CheckboxInput({
  register,
  errors,
  name,
  label,
  className = "w-4 h-4",
  ...rest
}) {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={name}
        className={className}
        {...register(name)}
        {...rest}
      />
      {label && (
        <Label htmlFor={name} className="font-medium">
          {label}
        </Label>
      )}
    </div>
  );
}
