import { createContext, useContext, useState } from "react";

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);

  const [showWidgetMenu, setShowWidgetMenu] = useState(false);

  const [showWidgetForm, setShowWidgetForm] = useState(false);
  const [widgetFormData, setWidgetFormData] = useState({
    name: "",
    text: "",
  });

  const toggleWidgetForm = (show, mode) => {
    setShowWidgetForm(false);
  };

  const toggleWidgetModal = () => {
    setShowWidgetMenu((prev) => !prev);
  };

  const updateCurrCategory = (category) => {
    setCurrentCategory(category);
  };

  const clearWidgetForm = () => {
    setWidgetFormData({
      name: "",
      text: "",
    });
    setShowWidgetForm(false);
  };

  const generateObjectId = () => {
    return [...Array(24)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");
  };

  const updateWidget = (widgetId, data) => {
    const updatedWidgetsList = currentCategory.widgets.map((widget) =>
      widget.id === widgetId ? { ...widget, ...data } : widget
    );

    const updatedCurrentCategory = {
      ...currentCategory,
      widgets: updatedWidgetsList,
    };

    const updatedCategoriesData = categoriesData.map((category) =>
      category.id === currentCategory.id ? updatedCurrentCategory : category
    );

    setCurrentCategory(updatedCurrentCategory);
    setCategoriesData(updatedCategoriesData);
  };

  const addNewWidget = (data) => {
    const widgetData = { ...data, status: true, id: generateObjectId() };
    const updatedWidgetsList = [...currentCategory.widgets, widgetData];
    const updatedCurrentCategory = {
      ...currentCategory,
      widgets: updatedWidgetsList,
    };
    const updatedCategoriesData = categoriesData.map((category) =>
      category.id === currentCategory.id ? updatedCurrentCategory : category
    );
    setCurrentCategory(updatedCurrentCategory);
    setCategoriesData(updatedCategoriesData);
  };

  const addOrUpdateWidget = (widgetData) => {
    if (widgetData.hasOwnProperty("id")) {
      updateWidget(widgetData.id, widgetData);
    } else {
      addNewWidget(widgetData);
    }
  };

  return (
    <AppStateContext.Provider
      value={{
        showWidgetMenu,
        toggleWidgetModal,

        currentCategory,
        categoriesData,
        setCategoriesData,
        updateCurrCategory,

        showWidgetForm,
        setShowWidgetForm,

        widgetFormData,
        setWidgetFormData,
        clearWidgetForm,

        toggleWidgetForm,

        addOrUpdateWidget,
        setShowWidgetMenu,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
