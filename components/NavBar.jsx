import NavBarItem from './NavBarItem'
export default function NavBar() {
    return (
            <div className='dark:bg-gray-500 bg-amber-100 flex items-center gap-6 justify-center p-4 lg:text-lg'>
                <NavBarItem title='Trending' param='fetchTrending' />
                <NavBarItem title='Top Rated' param='fetchTopRated' />
            </div>
    );
}