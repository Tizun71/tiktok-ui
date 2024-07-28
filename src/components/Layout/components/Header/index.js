import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Search from '~/components/Layout/components/Search';
function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                {/*Logo*/}
                <div className={styles.logo}>
                    <img src={images.logo} height="50px" alt="Tiktok" />
                </div>
                {/*Search*/}
                <Search />
                <div className={styles.actions}>
                    <Button primary>Đăng nhập</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
