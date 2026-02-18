import React from 'react'

const Checkboxes = ({CheckboxesData,checked, setChecked,rootData}) => {

  const handleChange = (isChecked,node) => {
    setChecked((prev) => {
      //if we check one checkbox it will checked
      const newState={...prev, [node.id]: isChecked};

      //function to update if the clicked checkbox has child items then check them
      const updateChildren = (node) => {
        node.children?.forEach(child => {
          newState[child.id] = isChecked; 
          //if again the child has children check them
          if (child.children) {
            updateChildren(child);
          } 
        });
      }
      updateChildren(node);
      //find the parent from the tree
      const findParent = (nodeList, childId) => {
        for(let node of nodeList){
           // Check if current node is parent
          if(node.children?.some((c)=>c.id === childId)){
            return node;
          }
          // Else search inside children
          if(node.children){
            const res = findParent(node.children, childId);
            if(res) return res;
          }
        }
      }
      //if all the childrens are checked then update the parent to check
      const verifyChecked = (node) =>{
        const parent = findParent(rootData, node.id);
        if (!parent) return;
        const allChecked = parent.children.every((child) => newState[child.id]);

        newState[parent.id] = allChecked;
        verifyChecked(parent);
      }
      verifyChecked(node);
      return newState;
    })
  }
    
  return (
    <div>
        {CheckboxesData.map((node)=>(
            <div style={{paddingLeft:'10px'}} key={node.id}>
                <input type='checkbox' 
                checked={checked[node.id] || false}
                onChange={(e) => handleChange(e.target.checked,node)}
                />
                <label>{node.label}</label>
                {node.children && <Checkboxes CheckboxesData = {node.children} checked={checked} setChecked={setChecked} rootData={rootData}/>}
        </div>
        ))}
        
    </div>
  )
}

export default Checkboxes
