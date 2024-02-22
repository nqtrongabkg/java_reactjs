package com.nguyenquoctrong.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.nguyenquoctrong.backend.entity.Role;
import com.nguyenquoctrong.backend.service.RoleService;
import com.nguyenquoctrong.backend.repository.RoleRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor

public class RoleServiceImpl implements RoleService {
    private RoleRepository roleRepository;

    @Override
    public Role createRole(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public Role getRoleById(Long roleId) {
        Optional<Role> optionalRole = roleRepository.findById(roleId);
        return optionalRole.get();
    }

    @Override
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    @Override
    public Role updateRole(Role role) {
        Role existingRole = roleRepository.findById(role.getId()).get();
        existingRole.setName(role.getName());
        Role updatedRole = roleRepository.save(existingRole);
        return updatedRole;
    }

    @Override
    public void deleteRole(Long roleId) {
        roleRepository.deleteById(roleId);
    }
}
