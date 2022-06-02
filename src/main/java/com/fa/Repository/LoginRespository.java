package com.fa.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fa.Entity.LoginEntity;

@Repository
public interface LoginRespository extends JpaRepository<LoginEntity, Long>  {

}
