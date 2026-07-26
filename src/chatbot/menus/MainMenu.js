import menuData from "../data/menu.json";

/**
 * ==========================================
 * MAIN MENU
 * Formats the WhatsApp/Shuru KRA style menu
 * ==========================================
 */

class MainMenu {

    /**
     * Return the main menu object
     */
    static getMenu() {

        return menuData.MAIN;

    }

    /**
     * Build the WhatsApp message
     */
    static buildMessage() {

        const menu = menuData.MAIN;

        let message = "";

        // Header
        message += `${menu.title}\n`;
        message += `${menu.subtitle}\n\n`;

        // Welcome
        message += `${menu.message}\n\n`;

        // Options
        menu.options.forEach(option => {

            message += `${option.id}️⃣ ${option.text}\n`;

        });

        // Footer
        message += "\nReply with a number.";

        return message;

    }

    /**
     * Find selected option
     */
    static getOption(choice) {

        const menu = menuData.MAIN;

        return menu.options.find(

            option => option.id === choice

        );

    }

}

export default MainMenu;