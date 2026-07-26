// ======================================================
// WHITE RHINO HOTEL
// STORAGE SERVICE
// ======================================================

class StorageService {

    // ==========================================
    // SAVE DATA
    // ==========================================

    set(key, value) {

        try {

            localStorage.setItem(

                key,

                JSON.stringify(value)

            );

            return true;

        }

        catch (error) {

            console.error(

                "Storage Error:",

                error

            );

            return false;

        }

    }

    // ==========================================
    // LOAD DATA
    // ==========================================

    get(key, defaultValue = null) {

        try {

            const item = localStorage.getItem(key);

            if (!item) {

                return defaultValue;

            }

            return JSON.parse(item);

        }

        catch (error) {

            console.error(

                "Storage Error:",

                error

            );

            return defaultValue;

        }

    }

    // ==========================================
    // REMOVE ITEM
    // ==========================================

    remove(key) {

        try {

            localStorage.removeItem(key);

            return true;

        }

        catch (error) {

            console.error(error);

            return false;

        }

    }

    // ==========================================
    // CLEAR EVERYTHING
    // ==========================================

    clear() {

        try {

            localStorage.clear();

            return true;

        }

        catch (error) {

            console.error(error);

            return false;

        }

    }

    // ==========================================
    // CHECK IF EXISTS
    // ==========================================

    has(key) {

        return localStorage.getItem(key) !== null;

    }

    // ==========================================
    // APPEND TO ARRAY
    // ==========================================

    append(key, item) {

        const data = this.get(key, []);

        data.push(item);

        this.set(key, data);

        return data;

    }

    // ==========================================
    // UPDATE ARRAY ITEM
    // ==========================================

    update(key, predicate, updates) {

        const data = this.get(key, []);

        const updated = data.map(record =>

            predicate(record)

                ? { ...record, ...updates }

                : record

        );

        this.set(key, updated);

        return updated;

    }

    // ==========================================
    // DELETE ARRAY ITEM
    // ==========================================

    delete(key, predicate) {

        const data = this.get(key, []);

        const filtered = data.filter(

            record => !predicate(record)

        );

        this.set(key, filtered);

        return filtered;

    }

    // ==========================================
    // FIND ONE
    // ==========================================

    find(key, predicate) {

        const data = this.get(key, []);

        return data.find(predicate);

    }

    // ==========================================
    // FILTER MANY
    // ==========================================

    filter(key, predicate) {

        const data = this.get(key, []);

        return data.filter(predicate);

    }

    // ==========================================
    // COUNT RECORDS
    // ==========================================

    count(key) {

        return this.get(key, []).length;

    }

    // ==========================================
    // EXPORT DATA
    // ==========================================

    export(key) {

        return JSON.stringify(

            this.get(key, []),

            null,

            2

        );

    }

    // ==========================================
    // IMPORT DATA
    // ==========================================

    import(key, json) {

        try {

            const data = JSON.parse(json);

            this.set(key, data);

            return true;

        }

        catch (error) {

            console.error(error);

            return false;

        }

    }

}

export default new StorageService();