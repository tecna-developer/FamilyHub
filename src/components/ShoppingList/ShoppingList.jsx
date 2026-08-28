import "./ShoppingList.css";
import Card from "../Card/Card";

const ShoppingList = () => {
  return (
    <Card title="Family list">
      <div className="summaryRow">
        <span>
          <strong id="doneCount">3</strong> of <span id="totalCount">8</span>{" "}
          done
        </span>
        <button className="clearBtn" id="clearCompletedBtn">
          clear done
        </button>
      </div>

      <div className="track">
        <div
          className="trackFill"
          id="listProgress"
          style={{ width: 37 }}
        ></div>
      </div>

      <div className="addRow">
        <input
          type="text"
          id="newItemInput"
          placeholder="Add an item"
          aria-label="New shopping list item"
        />
        <button className="addBtn" id="addItemBtn">
          Add
        </button>
      </div>

      <p className="emptyState" id="listEmpty">
        Nothing on the list yet — add the first item above.
      </p>

      <ul className="itemList" id="itemList">
        <li className="item" data-id="1">
          <label className="checkboxLabel">
            <input type="checkbox" className="checkbox" checked />
            <span className="itemName done">Milk</span>
          </label>
          <button className="removeBtn" aria-label="Remove Milk">
            ×
          </button>
        </li>
        <li className="item" data-id="2">
          <label className="checkboxLabel">
            <input type="checkbox" className="checkbox" checked />
            <span className="itemName done">Eggs</span>
          </label>
          <button className="removeBtn" aria-label="Remove Eggs">
            ×
          </button>
        </li>
        <li className="item" data-id="3">
          <label className="checkboxLabel">
            <input type="checkbox" className="checkbox" />
            <span className="itemName">Oat flour</span>
            <span className="qtyBadge">2x</span>
          </label>
          <button className="removeBtn" aria-label="Remove Oat flour">
            ×
          </button>
        </li>
        <li className="item" data-id="4">
          <label className="checkboxLabel">
            <input type="checkbox" className="checkbox" />
            <span className="itemName">Apples</span>
          </label>
          <button className="removeBtn" aria-label="Remove Apples">
            ×
          </button>
        </li>
      </ul>

      <div aria-live="polite" className="sr-only" id="listAnnouncer">
        3 of 8 items done.
      </div>
    </Card>
  );
};
export default ShoppingList;
