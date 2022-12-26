import { Component } from "react";

export default class Checkbox extends Component {
    render() {

        const { id, title, name, handleChange, checked } = this.props;
        return (
            <div className="flex justify-end">
                <button type="button" className="flex items-center cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    <input
                        id={id}
                        type="checkbox"
                        name={name}
                        onChange={handleChange}
                        checked={checked}
                        className="w-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 ml-3" />
                    <label htmlFor={id} className=" ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 px-5 pl-0 py-2.5">{title}</label>
                </button>
            </div>
        );
    }
}
