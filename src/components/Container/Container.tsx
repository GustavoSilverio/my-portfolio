import * as Styled from './Container.styled';
import { ContainerProps } from './Container.types';

export const ContainerWrapper = ({ children }: ContainerProps) => {
	return (
		<Styled.ContainerWrapper>
			{children}
		</Styled.ContainerWrapper>
	)
}