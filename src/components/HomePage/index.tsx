import BookmarkPanel from './BookmarkPanel';
import Content from './Content';
import Sidebar from './Sidebar';
import TopMenu from './TopMenu';

const HomePage: React.FC = () => (
    <>
        <TopMenu></TopMenu>
        <Sidebar></Sidebar>
        <Content></Content>
        <BookmarkPanel
            title=''
            description=''
            onClick={function (): void {
                throw new Error('Function not implemented.');
            }}
        />
    </>
);

export default HomePage;
