import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

const TodoList = () => {
  const [listAddShow, setListAddShow] = useState(false);
  const [editHideShow, setEditHideShow] = useState(false);
  const [addHideShow, setAddHideShow] = useState(true);
  // const [cancelBtn, setCancelBtn] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const hideShow = () => {
    setListAddShow(!listAddShow);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    // console.log(inputValue);
  };

  const addHandler = () => {
    setTodoList([...todoList, inputValue]);
    console.log(todoList);

    setInputValue("");

    if (inputValue == "") {
      alert("Please Fill The Field");
    }
  };
  const deleteIcon = (index) => {

    const newTodos = [...todoList];
    newTodos.splice(index, 1)
    // todoList.splice(index, 1);
    setTodoList(newTodos);
  };
  const editIcon = () => {
    setEditHideShow(!editHideShow);
    setAddHideShow(!addHideShow);
  };
  const updateHandler = () => {
    
  }
  const resetHandler = () => {
    setTodoList([]);

  }


  return (
    <>
      <div className='all_wrapper'>
        <div className='all_flex_wrapper'>
          <div className='left_container'>
            <div className='wrapper_list_button'>
              <div className='left_wrapper_ul'>
                <ol>
                  {todoList.map((list, index) => {
                    {
                      return (
                        <li className='todo_li'>
                          {list}
                          <span className='list_icon_span'>
                            <span className="editIcon" onClick={editIcon}> 
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </span>
                            <span className="deleteIcon" onClick={() => deleteIcon(index)}>
                              <FontAwesomeIcon icon={faRemove} />
                            </span>
                          </span>
                        </li>
                      );
                    }
                  })}
                </ol>
              </div>
              <div>
                <button className='btn_add_list' onClick={hideShow}>
                  Add List
                </button>
              </div>
            </div>
          </div>
          {listAddShow && (
            <div className='right_container' id='right_Container'>
              <div>
                <div className="inp_div">
                  <input
                    type='text'
                    value={inputValue}
                    onChange={handleChange}
                  />
                </div>
                <div className='btn_wrapper_both'>
                {addHideShow &&  <div>
                    <button className='btn_add' onClick={addHandler}>
                      Add
                    </button>
                  </div>
                  }
                  {editHideShow && <div>
                    <button className='btn_add' onClick={ updateHandler }>
                      Update
                    </button>
                  </div> }
                  <div>
                    <button className='btn_cancel' onClick={hideShow}>
                      Cancel
                    </button>
                  </div>
                  <div>
                    <button className='btn_add'  onClick={() => resetHandler()}>
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoList;
