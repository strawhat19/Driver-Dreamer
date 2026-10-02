import { iconPaths, type IconName } from './Icon.paths';

type IconProps = {
  id: string;
  size?: number;
  color?: string;
  name: IconName;
  className?: string;
};

export function Icon({ id, name, size = 20, color = `currentColor`, className = `icon` }: IconProps) {
  return (
    <svg
      id={id}
      fill={`none`}
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      stroke={color}
      aria-hidden={true}
      focusable={false}
      strokeWidth={1.5}
      className={className}
      strokeLinecap={`round`}
      strokeLinejoin={`round`}
    >
      {iconPaths[name].map((path, index) => (
        <path
          d={path}
          key={index}
          id={`${id}-path-${index}`}
          className={`${className}__path`}
        />
      ))}
    </svg>
  );
}

export default Icon;
