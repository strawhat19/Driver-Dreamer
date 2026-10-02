import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { elementProps } from '../../shared/elementProps';
import { iconPaths, type IconName } from './Icon.paths';

export type IconProps = {
    id: string;
    size?: number;
    color?: string;
    name: IconName;
    className?: string;
};

export function Icon({ id, name, size = 22, color = `#E32636`, className = `icon` }: IconProps) {
    return (
        <View
            {...elementProps(className, id)}
            accessible={false}
        >
            <Svg
                {...elementProps(`${className}-drawing`, `${id}-drawing`)}
                fill={`none`}
                width={size}
                height={size}
                stroke={color}
                viewBox={`0 0 24 24`}
                strokeWidth={1.6}
                strokeLinecap={`round`}
                strokeLinejoin={`round`}
            >
                {iconPaths[name].map((path, index) => (
                    <Path
                        {...elementProps(`${className}-path`, `${id}-path-${index}`)}
                        d={path}
                        key={`${name}-${index}`}
                    />
                ))}
            </Svg>
        </View>
    );
}

export default Icon;
