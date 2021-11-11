import React from "react";
import { Link } from "react-router-dom";
import { tabify } from "./services/utils";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

function Publish() {
  const tabObj = JSON.parse(window.localStorage.getItem("tabObj"));
  const eString = tabify(tabObj.e);
  const aString = tabify(tabObj.a);
  const dString = tabify(tabObj.d);
  const gString = tabify(tabObj.g);
  const bString = tabify(tabObj.b);
  const e2String = tabify(tabObj.e2);

  return (
    <ScrollSync>
      <div
        style={{
          padding: "2rem",
          margin: "2rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <ScrollSyncPane>
            <div
              className="tab-bar"
              style={{
                height: "1.5rem",
                width: "95%",
                overflowX: "auto",
                overflowY: "hidden",
                scrollbarWidth: "none",
                whiteSpace: "nowrap",
                borderStyle: "solid",
                listStyleType: "none",
                marginRight: "2.5rem",
                borderColor: "#FBB03B",
                borderBottomStyle: "none",
                color: "#FBB03B",
              }}
            >
              e |{e2String.join("")}
            </div>
          </ScrollSyncPane>
          <ScrollSyncPane>
            <div
              className="tab-bar"
              style={{
                height: "1.5rem",
                width: "95%",
                overflowX: "auto",
                overflowY: "hidden",
                scrollbarWidth: "none",
                whiteSpace: "nowrap",
                borderStyle: "solid",
                listStyleType: "none",
                marginRight: "2.5rem",
                borderColor: "#FBB03B",
                borderBottomStyle: "none",
                color: "#FBB03B",
              }}
            >
              b |{bString.join("")}
            </div>
          </ScrollSyncPane>
          <ScrollSyncPane>
            <div
              className="tab-bar"
              style={{
                height: "1.5rem",
                width: "95%",
                overflowX: "auto",
                overflowY: "hidden",
                scrollbarWidth: "none",
                whiteSpace: "nowrap",
                borderStyle: "solid",
                listStyleType: "none",
                marginRight: "2.5rem",
                borderColor: "#FBB03B",
                borderBottomStyle: "none",
                color: "#FBB03B",
              }}
            >
              g |{gString.join("")}
            </div>
          </ScrollSyncPane>
          <ScrollSyncPane>
            <div
              className="tab-bar"
              style={{
                height: "1.5rem",
                width: "95%",
                overflowX: "auto",
                overflowY: "hidden",
                scrollbarWidth: "none",
                whiteSpace: "nowrap",
                borderStyle: "solid",
                listStyleType: "none",
                marginRight: "2.5rem",
                borderColor: "#FBB03B",
                borderBottomStyle: "none",
                color: "#FBB03B",
              }}
            >
              d |{dString.join("")}
            </div>
          </ScrollSyncPane>
          <ScrollSyncPane>
            <div
              className="tab-bar"
              style={{
                height: "1.5rem",
                width: "95%",
                overflowX: "auto",
                overflowY: "hidden",
                scrollbarWidth: "none",
                whiteSpace: "nowrap",
                borderStyle: "solid",
                listStyleType: "none",
                marginRight: "2.5rem",
                borderColor: "#FBB03B",
                borderBottomStyle: "none",
                color: "#FBB03B",
              }}
            >
              a |{aString.join("")}
            </div>
          </ScrollSyncPane>
          <ScrollSyncPane>
            <div
              className="tab-bar"
              style={{
                height: "1.5rem",
                width: "95%",
                overflowX: "auto",
                overflowY: "hidden",
                scrollbarWidth: "none",
                whiteSpace: "nowrap",
                borderStyle: "solid",
                listStyleType: "none",
                marginRight: "2.5rem",
                borderColor: "#FBB03B",
                color: "#FBB03B",
              }}
            >
              e |{eString.join("")}
            </div>
          </ScrollSyncPane>
          <footer
            style={{
              position: "fixed",
              bottom: "0",
              left: "0",
              right: "0",
              width: "100%",
            }}
          >
            <Link to="/">
              <button
                style={{
                  width: "50%",
                  height: "3rem",
                  backgroundColor: "#171717",
                  color: "#DFDFDF",
                  borderColor: "#FBB03B",
                }}
              >
                Record Again
              </button>
            </Link>
            <Link to="/edit">
              <button
                style={{
                  width: "50%",
                  height: "3rem",
                  backgroundColor: "#171717",
                  color: "#DFDFDF",
                  borderColor: "#FBB03B",
                }}
              >
                Edit
              </button>
            </Link>
          </footer>
        </div>
      </div>
    </ScrollSync>
  );
}

export default Publish;
