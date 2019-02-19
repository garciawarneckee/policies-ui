import styled from 'styled-components';

/**
 * This container is prepared to display with the size of its content. 
 */
export const DefaultContainer = styled.div`
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 10px 0px;
  background-color: rgb(255, 255, 255);
  margin: 1em 1em;
  padding: 1em 1em;
`;

/**
 * This container is prepared to display with the size the browser.
 */
export const PageContainer = styled(DefaultContainer)`
  height: 100%;
`;

/**
 * Blank container.
 */
export const NoContentContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0em;
`;

export const PageNoContentContainer = styled(NoContentContainer)`
  height: 100%;
`;

/**
 * Used inside a Page container, configured to use the whole space available in the parent container
 */
export const Section = styled(DefaultContainer)`
	flex: 1;
	padding: 1em;
`;

/**
 * Displays elements in a row using flexbox;
 */
export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;