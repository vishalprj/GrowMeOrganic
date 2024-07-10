import { useState } from "react";
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { data } from "./constant";

const DropDownList = () => {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (department: string) => {
    setExpanded((prev) =>
      prev.includes(department)
        ? prev.filter((dep) => dep !== department)
        : [...prev, department]
    );
  };

  const toggleSelect = (department: string, subDepartment?: string) => {
    setSelected((prev) => {
      const newSelected = { ...prev };
      if (subDepartment) {
        newSelected[subDepartment] = !newSelected[subDepartment];
      } else {
        const dept = data?.find((dep) => dep.department === department);
        if (dept) {
          const allSelected = dept.sub_departments.every(
            (sub) => newSelected[sub]
          );
          newSelected[department] = !allSelected;
          dept.sub_departments.forEach(
            (sub) => (newSelected[sub] = !allSelected)
          );
        }
      }

      const dept = data?.find((dep) => dep.department === department);
      if (dept && dept.sub_departments.every((sub) => newSelected[sub])) {
        newSelected[department] = true;
      } else {
        newSelected[department] = false;
      }

      return newSelected;
    });
  };

  return (
    <List>
      {data?.map((dep) => (
        <div key={dep.department}>
          <ListItem>
            <ListItemIcon>
              <Checkbox
                checked={!!selected[dep.department]}
                onChange={() => toggleSelect(dep.department)}
              />
            </ListItemIcon>
            <ListItemText
              primary={`${dep.department} (${dep.sub_departments.length})`}
            />
            <IconButton onClick={() => toggleExpand(dep.department)}>
              {expanded.includes(dep.department) ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )}
            </IconButton>
          </ListItem>
          {expanded.includes(dep.department) && (
            <List component="div" disablePadding>
              {dep.sub_departments.map((sub) => (
                <ListItem key={sub} sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox
                      checked={!!selected[sub]}
                      onChange={() => toggleSelect(dep.department, sub)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={sub} />
                </ListItem>
              ))}
            </List>
          )}
        </div>
      ))}
    </List>
  );
};

export default DropDownList;
