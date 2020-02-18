const LOCAL_STORAGE = 'localStorage';
const STORAGE_TEST = '__storage_test__';

/**
 * Idiomatic way to check for the existence of LocalStorage
 * See https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability
 * @param type
 * @return {boolean}
 */
function isStorageAvailable(type = LOCAL_STORAGE) {
    let storage;
    try {
        storage = window[type];
        const x = STORAGE_TEST;
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return false;
    }
}

export default isStorageAvailable;
