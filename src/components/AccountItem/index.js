import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function AccountItem() {
    return (
        <div className={styles.wrapper}>
            <img
                className={styles.avatar}
                src="https://i.pinimg.com/564x/85/53/5e/85535e2d471e0f036ae4492327581c3e.jpg"
                alt=""
            />
            <div className={styles.info}>
                <p className={styles.name}>
                    <span>Tien Dung</span>
                    <FontAwesomeIcon className={styles.check} icon={faCircleCheck} />
                </p>
                <span className={styles.username}>Tizun</span>
            </div>
        </div>
    );
}

export default AccountItem;
