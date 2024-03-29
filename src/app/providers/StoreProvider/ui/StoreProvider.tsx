import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: StateSchema;
}

const StoreProvider: React.FC<StoreProviderProps> = ({
	children,
	initialState,
}: StoreProviderProps) => {
	const store = createReduxStore(initialState);

	return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
