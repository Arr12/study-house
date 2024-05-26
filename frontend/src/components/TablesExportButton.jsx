import React, { useState } from "react";
import { PrintOutlined } from "@mui/icons-material";
import Modal from "../modals/Modal";
import ExcelJs from "exceljs";
import { Select } from "antd";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { DatePicker } from "antd";
// import { formatDateEnUs } from "../../../helpers/function";

function TablesExportButton({
  dataOrHtml,
  fileName,
  docTitle,
  blkkTitle,
  children,
  anyFunction,
  isHideExportFunction,
  isSelected,
}) {
  const exportToExcel = (dataOrHtml, fileName) => {
    let sheetName = fileName + ".xlsx";
    let workbook = new ExcelJs.Workbook();
    let sheet = workbook.addWorksheet(sheetName, {
      views: [{ showGridLines: false }],
    });

    let columnArr = [];
    // for (let i in dataOrHtml.head) {
    //   let tempObj = { name: "" };
    //   tempObj.name = i;
    //   columnArr.push(tempObj);
    // }
    dataOrHtml.head.map((v, i) => {
      columnArr.push({ name: v });
    });

    let date = new Date();
    sheet.addTable({
      name: `Header`,
      ref: "A1",
      headerRow: true,
      totalsRow: false,
      style: {
        theme: "",
        showRowStripes: false,
        showFirstColumn: true,
      },
      columns: [{ name: "BLKK Connect" }],
      rows: [[`Tanggal: ${date}`], [``]],
    });

    sheet.addTable({
      name: "Sheet1",
      ref: "A5",
      headerRow: true,
      totalsRow: false,
      style: {
        theme: "TableStyleMedium2",
        showRowStripes: false,
      },
      columns: columnArr ? columnArr : [{ name: "" }],
      rows: dataOrHtml.body.map((e) => {
        let arr = [];
        for (let i in e) {
          arr.push(e[i]);
        }
        return arr;
      }),
    });

    sheet.getCell("A1").font = { size: 20, bold: true };
    sheet.columns = sheet.columns.map((e) => {
      const expr = e.values[5];
      switch (expr) {
        case "Name":
          return { width: 50 };
        case "Gender":
          return { width: 40 };
        case "Height":
          return { width: 30 };
        default:
          return { width: 20 };
      }
    });

    const table = sheet.getTable("Sheet1");
    for (let i = 0; i < table.table.columns.length; i++) {
      sheet.getCell(`${String.fromCharCode(65 + i)}5`).font = { size: 12 };
      sheet.getCell(`${String.fromCharCode(65 + i)}5`).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "c5d9f1" },
      };
      for (let j = 0; j < table.table.rows.length; j++) {
        let rowCell = sheet.getCell(`${String.fromCharCode(65 + i)}${j + 6}`);
        rowCell.alignment = { wrapText: true };
        rowCell.border = {
          bottom: {
            style: "thin",
            color: { argb: "a6a6a6" },
          },
        };
      }
    }
    table.commit();

    const writeFile = (fileName, content) => {
      const link = document.createElement("a");
      const blob = new Blob([content], {
        type: "application/vnd.ms-excel;charset=utf-8;",
      });
      link.download = fileName;
      link.href = URL.createObjectURL(blob);
      link.click();
    };
    workbook.xlsx.writeBuffer().then((buffer) => {
      writeFile(sheetName, buffer);
    });
  };

  const handleExportPDF = (dataOrHtml, fileName, docTitle, blkkTitle, type) => {
    if (type === "pdf") {
      const doc = new jsPDF();
      doc.setFont("helvetica", "normal");
      const htmlContent = ``;
      // Add a logo
      const logo = new Image();
      logo.src = "/assets/images/blkkconnectlogo.png";
      doc.addImage(logo, "PNG", 15, 10, 60, 10);

      // Add a title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text(docTitle, 15, 35);

      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      //   doc.text("Tanggal terbit : " + formatDateEnUs(new Date()), 15, 40);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      blkkTitle && doc.text(blkkTitle, 15, 51);

      // const data = [
      //   ['Name', 'Age', 'City'],
      //   ['John', '30', 'New York'],
      //   ['Jane', '25', 'Los Angeles'],
      // ];

      // Set table styles
      const styles = {
        theme: "grid",
        fontSize: 8,
        overflow: "linebreak",
        columnWidth: "auto",
      };

      doc.autoTable({
        head: [dataOrHtml?.head],
        body: dataOrHtml?.body,
        startY: blkkTitle ? 55 : 45,
        styles,
      });

      // doc.save('table_example.pdf');
      // doc.html(reportTemplateRef.current, {
      //   async callback(doc) {
      //     await doc.save('document.pdf');
      //   },
      // });

      doc.html(htmlContent, {
        callback: function (pdf) {
          // pdf.save('../../../src/documents/' + fileName + '.pdf');
          window.open(pdf.output("bloburl"), "_blank");
        },
      });
    } else if (type === "csv") {
      const csvContent =
        "data:text/csv;charset=utf-8," +
        dataOrHtml?.body?.map((row) => Object.values(row).join(",")).join("\n");
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", fileName + ".csv");
      document.body.appendChild(link);
      link.click();
    } else if (type === "excel") {
      exportToExcel(dataOrHtml, fileName);
    }
    if (!isHideExportFunction) {
      anyFunction();
    }
  };

  const [isOpen, setIsOpen] = useState({ status: false, type: "pdf" });
  const handleClickExport = () => {
    setIsOpen({ ...isOpen, status: true });
  };

  return (
    <>
      <div
        className="bg-[#1363DF] text-white p-2 mr-3 rounded-lg cursor-pointer"
        onClick={() => handleClickExport()}
      >
        <PrintOutlined />
      </div>
      {isOpen?.status && (
        <Modal
          headerChildren={"Export"}
          onClickClose={() => setIsOpen({ ...isOpen, status: false })}
          className={"lg:w-[60%] lg:h-[43vw]"}
        >
          <div className="grid items-end  rounded-lg px-3 md:p-5">
            {children}
          </div>
          <div
            className={`p-5 relative lg:fixed bottom-0 flex flex-col md:flex-row right-0 md:items-center justify-end bg-white`}
          >
            <div>
              <button
                onClick={
                  isOpen?.type === "excel"
                    ? () =>
                        handleExportPDF(
                          dataOrHtml,
                          fileName,
                          docTitle,
                          blkkTitle,
                          isOpen?.type
                        )
                    : () =>
                        handleExportPDF(
                          dataOrHtml,
                          fileName,
                          docTitle,
                          blkkTitle,
                          isOpen?.type
                        )
                }
                className={`${
                  !isSelected ? "hidden" : ""
                } mr-1 font-bold px-5 py-2 rounded-xl bg-[#1363DF] text-white`}
                disabled={dataOrHtml?.isLoaded ? false : true}
              >
                {dataOrHtml?.isLoaded ? "Export" : "Loading..."}
              </button>
              <Select
                style={{ width: 150 }}
                className="ml-1 px-3 py-1 rounded-xl border-2 border-[#8C8CA1] text-white choose-select-export"
                value={isOpen?.type}
                onChange={(value) => setIsOpen({ ...isOpen, type: value })}
                options={[
                  {
                    value: "pdf",
                    label: "PDF",
                  },
                  {
                    value: "csv",
                    label: "CSV",
                  },
                  {
                    value: "excel",
                    label: "EXCEL",
                  },
                ]}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default TablesExportButton;
