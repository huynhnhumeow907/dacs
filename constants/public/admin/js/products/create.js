const previewImageMain = new FileUploadWithPreview.FileUploadWithPreview(
  "upload-image-preview-main",
  {
    multiple: true,
    maxFileCount: 2,
    text: {
      label: "Ảnh đại diện cho sản phẩm",
      chooseFile: "Chọn ảnh đại diện cho sản phẩm (Tối đa 2 file)", // Nút chọn file (chính)
      browse: "Duyệt ảnh", // Nút duyệt file
      selectedCount: "ảnh được chọn",
    },
    accept: "image/*",
  }
);

const previewImageSub = new FileUploadWithPreview.FileUploadWithPreview(
  "upload-image-preview-sub",
  {
    multiple: true,
    maxFileCount: 10,
    text: {
      label: "Ảnh sản phẩm",
      chooseFile: "Chọn ảnh cho sản phẩm (Tối đa 10 ảnh)", // Nút chọn file (chính)
      browse: "Duyệt ảnh", // Nút duyệt file
      selectedCount: "ảnh được chọn (Tối đa 10 ảnh)",
    },
    accept: "image/*",
  }
);

previewImageMain.addImagesFromPath([
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN2ko9LJLTbaPrcncnhZFDsvJh4D4Zz4mGwA&s",
]);

window.addEventListener(
  FileUploadWithPreview.Events.IMAGE_MULTI_ITEM_CLICKED,
  (e) => {
    const file = e.detail.file;
    const imageElement = document.createElement("img");
    imageElement.src = URL.createObjectURL(file);
    const viewerContainer = document.createElement("div");
    viewerContainer.appendChild(imageElement);
    document.body.appendChild(viewerContainer);

    const viewer = new Viewer(imageElement, {
      hidden: () => {
        document.body.removeChild(viewerContainer);
        viewer.destroy();
      },
    });

    viewer.show();
  }
);

const BAT_SU_KIEN_THAY_DOI_GIA = () => {
  const listCol = document.querySelectorAll("[parent-variant] tr");
  if (!listCol) return;
  listCol.forEach((it) => {
    const container = it.querySelector(".format-number-overview");
    const formatter = it.querySelector("sl-format-number");
    const input = container.querySelector("sl-input");
    const discount = it.querySelector("sl-input[discount]");
    input.addEventListener(
      "sl-input",
      () =>
        (formatter.value =
          parseInt(input.value) -
            (parseInt(input.value) * parseInt(discount.value)) / 100 || 0)
    );
    discount.addEventListener("sl-input", () => {
      discount.value = parseInt(discount.value);
      if (!discount.value) discount.value = 0;
      formatter.value =
        parseInt(input.value) -
          parseInt(input.value) * (Math.abs(parseInt(discount.value)) / 100) ||
        0;
    });
  });
};

const main = async () => {
  const btnCreateProduct = document.querySelector("[btn-create-new-product]");
  if (!btnCreateProduct) return;
  BAT_SU_KIEN_THAY_DOI_GIA();
  btnCreateProduct.addEventListener("click", async () => {
    const formData = new FormData();

    previewImageMain.cachedFileArray.forEach((it) => {
      formData.append("images_main", it);
    });
    const variant = await dataSendBackEndVariant();

    formData.append("bien_the", JSON.stringify(variant));

    axios.post("/admin/Sản_phẩm/Tạo_sản_phẩm", formData).then((res) => {
      if (res.status == 200) location.reload();
    });
  });
};

main();

const btnNewVariant = async () => {
  const btn = document.querySelector("[btn-create-new-variant]");
  if (!btn) return;
  const parentVariant = document.querySelector("[parent-variant]");
  btn.addEventListener("click", () => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="mx-auto h-full my-auto"><sl-switch class="mx-auto block" checked="" size="medium" form="" data-optional="" data-valid=""></sl-switch></td> <td> <sl-select class="w-max min-w-[150px] mx-auto" value="" multiple="" clearable="" max-options-visible="2" size="medium" placement="bottom" form="" data-optional="" data-valid=""> <small>Màu sắc</small> <sl-option value="option-1" role="option" aria-selected="false" aria-disabled="false"> <div class="flex justify-between items-center"> <sl-icon class="mr-[10px]" slot="prefix" name="palette" aria-hidden="true" library="default"></sl-icon> <div>đỏ</div> <div class="ml-auto w-[20px]"><sl-color-picker format="hex" size="small" label="Mã màu" name="code" value="#e30d18" disabled="" form="" data-optional="" data-valid=""> </sl-color-picker></div> </div> </sl-option> <small>Kích thước</small> <sl-option value="67862cb724e1760b15b700be" role="option" aria-selected="false" aria-disabled="false"> <sl-icon slot="prefix" name="rulers" aria-hidden="true" library="default"></sl-icon>L<sl-icon slot="suffix" name="patch-check" aria-hidden="true" library="default"></sl-icon> </sl-option> <sl-option value="67862d0824e1760b15b700dd" role="option" aria-selected="false" aria-disabled="false"> <sl-icon slot="prefix" name="rulers" aria-hidden="true" library="default"></sl-icon>M<sl-icon slot="suffix" name="patch-check" aria-hidden="true" library="default"></sl-icon> </sl-option> <sl-option value="67862d1224e1760b15b700fa" role="option" aria-selected="false" aria-disabled="false"> <sl-icon slot="prefix" name="rulers" aria-hidden="true" library="default"></sl-icon>F<sl-icon slot="suffix" name="patch-check" aria-hidden="true" library="default"></sl-icon> </sl-option> </sl-select> </td> <td> <div class="format-number-overview flex gap-x-[10px] items-center justify-center mx-auto"><sl-input name='price' class="w-[7rem] text-center" type="number" size="medium" form="" data-optional="" data-valid=""></sl-input></div> </td> <td> <div class="mx-auto"><sl-input name='discount' class="w-[7rem] text-center mx-auto" type="number" value="0" discount="" max="100" maxlength="2" size="medium" form="" data-optional="" data-valid=""></sl-input></div> </td> <td> <div class="flex items-center w-max justify-center mx-auto"> <sl-format-number></sl-format-number> <div class="đ">đ</div> </div> </td> <td><sl-input name='quantity' class="w-[7rem] mx-auto" type="number" value="0" size="medium" form="" data-optional="" data-valid=""></sl-input></td> <td><sl-icon class="cursor-pointer text-[red]" slot="suffix" name="trash" aria-hidden="true" library="default"></sl-icon></td>`;

    {
      const icon = tr.querySelector("sl-icon[name='trash']");
      icon.addEventListener("click", () => parentVariant.removeChild(tr));
    }

    {
      // BẮT SỰ KIỆN THAY ĐỔI GIÁ
      const container = tr.querySelector(".format-number-overview");
      const formatter = tr.querySelector("sl-format-number");
      const input = container.querySelector("sl-input");
      const discount = tr.querySelector("sl-input[discount]");
      input.addEventListener(
        "sl-input",
        () =>
          (formatter.value =
            parseInt(input.value) -
              (parseInt(input.value) * parseInt(discount.value)) / 100 || 0)
      );
      discount.addEventListener("sl-input", () => {
        discount.value = parseInt(discount.value);
        if (!discount.value) discount.value = 0;
        formatter.value =
          parseInt(input.value) -
            parseInt(input.value) *
              (Math.abs(parseInt(discount.value)) / 100) || 0;
      });
    }

    parentVariant.appendChild(tr);
  });
  const listCol = document.querySelectorAll("tbody tr");
  if (listCol.length > 0) {
    listCol.forEach((it) => {
      const icon = it.querySelector("sl-icon[name='trash']");

      icon.addEventListener("click", () => {
        parentVariant.removeChild(it);
      });
    });
  }
};

btnNewVariant();

const dataSendBackEndVariant = async () => {
  const listCol = document.querySelectorAll("[parent-variant] tr");
  if (!listCol) return;
  const result = [];
  listCol.forEach((it) => {
    const status = it.querySelector("sl-switch").checked;
    const color = it.querySelector("sl-select[name='color']");
    const size = it.querySelector("sl-select[name='size']");
    const price = it.querySelector("sl-input[name='price']");
    const discount = it.querySelector("sl-input[name='discount']");
    const quantity = it.querySelector("sl-input[name='quantity']");
    if (!discount.value) discount.value = 0;
    if (
      attribute.value.length == 2 &&
      parseInt(discount.value) <= 100 &&
      parseInt(discount.value) >= 0 &&
      parseInt(quantity.value)
    ) {
      const data = {
        status: status == true ? "active" : "inactive",
        attribute: attribute.value,
        price: parseInt(price.value),
        discount: parseInt(discount.value),
        quantity: parseInt(quantity.value),
      };
      result.push(data);
    }
  });
  return result;
};
