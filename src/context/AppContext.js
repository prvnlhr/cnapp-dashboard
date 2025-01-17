import { createContext, useContext, useEffect, useState } from "react";

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

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const toggleWidgetMenu = () => {
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

  const deleteWidget = (categoryId, widgetId) => {
    const updatedCategoriesData = categoriesData.map((category) => {
      if (category.id === categoryId) {
        const updatedWidgets = category.widgets.filter(
          (widget) => widget.id !== widgetId
        );

        return {
          ...category,
          widgets: updatedWidgets,
        };
      }
      return category;
    });

    setCategoriesData(updatedCategoriesData);

    if (currentCategory?.id === categoryId) {
      setCurrentCategory({
        ...currentCategory,
        widgets: updatedCategoriesData.find(
          (category) => category.id === categoryId
        ).widgets,
      });
    }
  };

  useEffect(() => {
    if (searchQuery) {
      const filteredCategories = categoriesData
        .map((category) => {
          const filteredWidgets = category.widgets.filter((widget) =>
            widget.name.toLowerCase().includes(searchQuery.toLowerCase())
          );

          return filteredWidgets.length > 0
            ? { ...category, widgets: filteredWidgets }
            : null;
        })
        .filter((category) => category !== null);
      setSearchResult(filteredCategories);
    } else {
      setSearchResult(null);
    }
  }, [searchQuery]);

  return (
    <AppStateContext.Provider
      value={{
        showWidgetMenu,
        toggleWidgetMenu,

        currentCategory,
        categoriesData,
        setCategoriesData,
        updateCurrCategory,

        showWidgetForm,
        setShowWidgetForm,

        widgetFormData,
        setWidgetFormData,
        clearWidgetForm,

        setShowWidgetMenu,
        addOrUpdateWidget,
        deleteWidget,

        searchQuery,
        setSearchQuery,
        searchResult,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
