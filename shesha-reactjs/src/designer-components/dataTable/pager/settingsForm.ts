import { DesignerToolbarSettings } from '@/interfaces/toolbarSettings';

export const getSettings = (data: any) =>
  new DesignerToolbarSettings(data)
    .addCollapsiblePanel({
      id: "b8954bf6-f76d-4139-a850-c99bf06c8b69",
      propertyName: "separator1",
      parentId: "root",
      label: "Display",
      labelAlign: "right",
      expandIconPosition: "start",
      ghost: true,
      hideWhenEmpty: true,
      header: {
          id: '3342DA1C-DA07-46F6-8026-E8B9A93F094A',
          components: []
      },
      content: {
          id: '1BCC52E8-FD3B-4309-AD9B-099CDB729441',
          components: new DesignerToolbarSettings()
    .addTextField({
      id: '5c813b1a-04c5-4658-ac0f-cbcbae6b3bd4',
      propertyName: 'componentName',
      parentId: 'root',
      label: 'Component name',
      validate: { required: true },
      jsSetting: false
    })
    .toJson()
  }
})
    .addCollapsiblePanel({
      id: "8e9069f1-9981-4336-b7af-acd6250a8d2e",
      propertyName: "separatorPageSizes",
      parentId: "root",
      label: 'Page Sizes',
      labelAlign: "right",
      expandIconPosition: "start",
      ghost: true,
      hideWhenEmpty: true,
      header: {
          id: '3342DA1C-DA07-46F6-8026-E8B9A93F094A',
          components: []
      },
      content: {
          id: '1BCC52E8-FD3B-4309-AD9B-099CDB729441',
          components: new DesignerToolbarSettings()
    .addCheckbox({
      id: 'ff14eada-10f7-4470-8db2-52b543d9d03f',
      propertyName: 'showSizeChanger',
      parentId: 'root',
      label: 'Show Size Changer',
      defaultValue: true,
    })
    .addCheckbox({
      id: 'b0304429-96b1-40bd-9b36-65197df42470',
      propertyName: 'showTotalItems',
      parentId: 'root',
      label: 'Show Total Items',
      defaultValue: true,
    })
    .addCheckbox({
      id: 'ff14eada-10f7-4470-8db2-52b543d9d111',
      propertyName: 'hidden',
      parentId: 'root',
      label: 'Hidden',
    })
    .toJson()
  }
})
.toJson();
