import { useTranslation } from 'react-i18next';
// import BugButton from 'widgets/PageError/ui/BugButton';
import { Block } from 'shared/Block/Block';
import { Page } from 'shared/Page/Page';
import { Intro } from 'entities/Intro/Intro';
import cls from './MainPage.module.scss';

const MainPage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Page className={cls.mainPage}>
			{/* <BugButton /> */}
			<Intro />
		</Page>
	);
};

export default MainPage;
