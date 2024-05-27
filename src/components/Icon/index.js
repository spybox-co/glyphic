import { SWMIcon } from 'react-swm-icon-pack';

export default function Icon({ type, className, size, color, set, stroke }) {
  const classes = [className && className, "spbx--icon"].join(' ').trim();
  return (
    <span className={classes}>
      <SWMIcon
        name={type || "Circle"}
        color={color || "currentColor"}
        set={set || "outltine"}
        size={size || 16}
        strokeWidth={stroke || 2}
      />
    </span>
  );
}