import React, { forwardRef, useRef } from "react";
import { Table, Select, Input } from "antd";
import { FilterAlt, PersonAdd } from "@mui/icons-material";
const { Search } = Input;
// import { useReactToPrint } from "react-to-print";
// import TablesExportButton from "./TablesExportButton";

export default function Tables({
  columns,
  dataSource,
  textNoData,
  className,
  isHidePritingBtn,
  isHideFilterAltBtn,
  isHideAddUserBtn,
  isHideSearch,
  setOpenModalAdd,
  textBtnAdd,
  IconBtnAdd,
  handleKeyUp,
  loading,
  pagination,
  rowClassName,
  tableClassName,
  rowSelection,
  htmlContentAdded,
  fileName,
  docTitle,
  blkkTitle,
  modalExportHtml,
  anyFunctionExport,
  isHideExportFunction,
  isSelected,
}) {
  const componentRef = useRef();
  //   const handlePrint = useReactToPrint({
  //     content: () => componentRef.current,
  //   });
  return (
    <>
      <div
        className={`flex flex-col lg:flex-row justify-between items-center ${className}`}
      >
        {!isHideSearch && (
          <Search
            placeholder="Search for..."
            className="pr-0 md:pr-5 h-10 w-full x-search-lembaga"
            onChange={handleKeyUp}
          />
        )}
        <div
          className={`flex flex-row w-full ${
            !isHideSearch ? "lg:w-2/5" : "lg:w-full"
          } justify-end mt-4 lg:mt-0`}
        >
          {!isHideAddUserBtn && (
            <div
              className="bg-[#FFBE40] flex flex-row mr-3 items-center text-white p-2 m-0 md:mr-3 rounded-lg cursor-pointer"
              onClick={setOpenModalAdd}
            >
              <span>{textBtnAdd ? textBtnAdd : "Add User"}</span>
              {IconBtnAdd ? IconBtnAdd : <PersonAdd className="ml-2" />}
            </div>
          )}
          {/* {!isHidePritingBtn && (
            <TablesExportButton
              dataOrHtml={htmlContentAdded}
              fileName={fileName}
              docTitle={docTitle}
              blkkTitle={blkkTitle}
              isHideExportFunction={isHideExportFunction}
              anyFunction={anyFunctionExport}
              isSelected={isSelected}
            >
              {modalExportHtml}
            </TablesExportButton>
            // <div
            //   className="bg-[#1363DF] text-white p-2 mr-3 rounded-lg cursor-pointer"
            //   onClick={() => handlePrint()}
            // >
            //   <PrintOutlined />
            // </div>
          )} */}
          {!isHideFilterAltBtn && (
            <div
              className="bg-[#1363DF] text-white p-2 mr-3 rounded-lg cursor-pointer"
              onClick={() => console.log()}
            >
              <FilterAlt />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row py-4 items-center px-1 justify-between my-3 rounded-lg w-full overflow-x-auto">
        {dataSource?.length > 0 ? (
          <>
            <div className="w-full">
              <Table
                columns={columns}
                dataSource={dataSource}
                loading={loading}
                pagination={pagination}
                className={tableClassName}
                rowClassName={rowClassName}
                ref={componentRef}
                rowSelection={rowSelection ? rowSelection : false}
              />
            </div>
          </>
        ) : (
          <div className="flex h-[290px] items-center justify-center w-full">
            <p className="text-[#8C8CA1]">{textNoData}</p>
          </div>
        )}
      </div>
    </>
  );
}
